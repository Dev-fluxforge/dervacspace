import { Injectable } from '@angular/core';
import { Subscription } from '../models/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private subscriptions: Subscription[] = [
    {
      id: 1,
      name: 'Hourly Pass',
      duration: '1 Hour',
      price: 1500,
      description: 'Perfect for quick work sessions or meetings',
      features: [
        '24/7 Power Supply',
        'Cool Environment',
        'Free High-Speed WiFi',
        'Access to Common Areas'
      ]
    },
    {
      id: 2,
      name: 'Daily Pass',
      duration: '1 Day',
      price: 5000,
      description: 'Great for full-day productivity bursts',
      features: [
        '24/7 Power Supply',
        'Cool Environment',
        'Free High-Speed WiFi',
        'Access to Common Areas',
        'Complimentary Coffee & Tea'
      ],
      savings: 'Save $15 compared to hourly'
    },
    {
      id: 3,
      name: 'Weekly Pass',
      duration: '7 Days',
      price: 28000,
      description: 'Ideal for project-based work or short-term contracts',
      features: [
        '24/7 Power Supply',
        'Cool Environment',
        'Free High-Speed WiFi',
        'Access to Common Areas',
        'Complimentary Coffee & Tea',
        '10% Discount on Refreshments',
        'Meeting Room Credits (2 hours)'
      ],
      popular: true,
      savings: 'Save ₦7,000 compared to daily'
    },
    {
      id: 4,
      name: 'Monthly Pass',
      duration: '30 Days',
      price: 100000,
      description: 'Best value for regular users and dedicated professionals',
      features: [
        '24/7 Power Supply',
        'Cool Environment',
        'Free High-Speed WiFi',
        'Access to Common Areas',
        'Complimentary Coffee & Tea',
        '20% Discount on Refreshments',
        'Meeting Room Credits (10 hours)',
        'Dedicated Locker Access',
        'Priority Support'
      ],
      savings: 'Save ₦50,000 compared to weekly'
    }
  ];

  getSubscriptions(): Subscription[] {
    return this.subscriptions;
  }

  getSubscriptionById(id: number): Subscription | undefined {
    return this.subscriptions.find(sub => sub.id === id);
  }

  getPopularSubscription(): Subscription | undefined {
    return this.subscriptions.find(sub => sub.popular);
  }
}
