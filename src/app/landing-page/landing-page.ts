import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage implements OnInit {
  isMobileMenuOpen = false;
  currentYear: number = new Date().getFullYear();

  ngOnInit(): void {
    // Initialize any required functionality
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateHamburgerAnimation();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.updateHamburgerAnimation();
  }

  private updateHamburgerAnimation(): void {
    const hamburgerLines = document.querySelectorAll('#mobile-menu-button span');

    if (this.isMobileMenuOpen) {
      // Animate hamburger to X
      if (hamburgerLines[0]) {
        (hamburgerLines[0] as HTMLElement).style.transform = 'rotate(45deg) translate(5px, 5px)';
      }
      if (hamburgerLines[1]) {
        (hamburgerLines[1] as HTMLElement).style.opacity = '0';
      }
      if (hamburgerLines[2]) {
        (hamburgerLines[2] as HTMLElement).style.transform = 'rotate(-45deg) translate(7px, -6px)';
      }
    } else {
      // Reset hamburger animation
      if (hamburgerLines[0]) {
        (hamburgerLines[0] as HTMLElement).style.transform = 'none';
      }
      if (hamburgerLines[1]) {
        (hamburgerLines[1] as HTMLElement).style.opacity = '1';
      }
      if (hamburgerLines[2]) {
        (hamburgerLines[2] as HTMLElement).style.transform = 'none';
      }
    }
  }
}
