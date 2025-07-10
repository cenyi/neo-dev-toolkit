import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface AccessibilityEnhancementsProps {
  children: React.ReactNode;
}

const AccessibilityEnhancements: React.FC<AccessibilityEnhancementsProps> = ({ children }) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Alt+M
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation with Alt+N
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a, button');
          if (firstLink instanceof HTMLElement) {
            firstLink.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Add screen reader announcements for dynamic content
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Expose announcement function globally for use in tools
  React.useEffect(() => {
    (window as any).announceToScreenReader = announceToScreenReader;
  }, []);

  return (
    <>
      {/* Skip links for keyboard navigation */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 z-50">
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          onFocus={(e) => e.currentTarget.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('accessibility.skipToMainContent')} (Alt+M)
        </a>
        <a
          href="#navigation"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-ring"
          onFocus={(e) => e.currentTarget.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('accessibility.skipToNavigation')} (Alt+N)
        </a>
      </div>

      {/* Left-handed layout option */}
      <div className="fixed top-16 right-4 z-40">
        <button
          className="bg-accent text-accent-foreground p-2 rounded-md shadow-md hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() => {
            document.body.classList.toggle('left-handed-layout');
            announceToScreenReader(t('accessibility.layoutOrientationToggled'));
          }}
          aria-label={t('accessibility.toggleLeftHandedLayout')}
          title={t('accessibility.toggleLeftHandedLayoutTitle')}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </button>
      </div>

      {/* High contrast mode toggle */}
      <div className="fixed top-28 right-4 z-40">
        <button
          className="bg-accent text-accent-foreground p-2 rounded-md shadow-md hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() => {
            document.body.classList.toggle('high-contrast');
            announceToScreenReader(t('accessibility.highContrastToggled'));
          }}
          aria-label={t('accessibility.toggleHighContrast')}
          title={t('accessibility.toggleHighContrastTitle')}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 0 0 0 20V2z" />
          </svg>
        </button>
      </div>

      {children}
    </>
  );
};

export default AccessibilityEnhancements;