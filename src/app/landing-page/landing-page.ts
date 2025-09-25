import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
   // Method to scroll to sections
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Method to get current year for footer
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  // Method to close mobile menu
  closeMobileMenu(): void {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const hamburgerLines = mobileMenuButton?.querySelectorAll('span');

    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }

    // Reset hamburger animation
    if (hamburgerLines) {
      hamburgerLines[0].style.transform = 'none';
      hamburgerLines[1].style.opacity = '1';
      hamburgerLines[2].style.transform = 'none';
    }
  }

}
