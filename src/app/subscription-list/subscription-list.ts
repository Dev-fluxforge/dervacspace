import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from '../models/subscription.model';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.html',
  styleUrls: ['./subscription-list.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class SubscriptionListComponent implements OnInit {
  subscriptions: Subscription[] = [];
  selectedSubscription: Subscription | null = null;
  bookingForm = {
    name: '',
    email: '',
    phone: '',
    notes: ''
  };

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit() {
    this.subscriptions = this.subscriptionService.getSubscriptions();
  }

  selectSubscription(subscription: Subscription) {
    this.selectedSubscription = subscription;
  }

  getCardClasses(subscription: Subscription): string {
    const baseClasses = 'rounded-2xl shadow-lg p-6 cursor-pointer transition duration-300 transform';
    const selectedClasses = subscription.popular ? 'border-2 border-yellow-500' : 'border border-gray-200';
    const isSelected = this.selectedSubscription?.id === subscription.id;
    const selectedStyle = isSelected ? 'ring-2 ring-blue-500 bg-blue-50 scale-105' : 'bg-white hover:scale-105';

    return `${baseClasses} ${selectedClasses} ${selectedStyle}`;
  }

  bookSubscription() {
    if (this.selectedSubscription) {
      // In a real application, you would send this data to a backend
      console.log('Booking details:', {
        subscription: this.selectedSubscription,
        customer: this.bookingForm
      });

      alert(`Thank you for choosing ${this.selectedSubscription.name}! Our team will contact you within 24 hours to confirm your booking.`);

      // Reset form
      this.selectedSubscription = null;
      this.bookingForm = { name: '', email: '', phone: '', notes: '' };
    }
  }

  calculateSavings(subscription: Subscription): string {
    switch(subscription.id) {
      case 2: // Daily
        return 'Save $15 compared to hourly rate';
      case 3: // Weekly
        return 'Save $55 compared to daily rate';
      case 4: // Monthly
        return 'Save $200 compared to weekly rate';
      default:
        return '';
    }
  }
}
