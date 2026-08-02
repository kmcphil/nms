import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ResultsPage } from './pages/ResultsPage';
import { ServicesPage } from './pages/ServicesPage';
import { StartConversationPage } from './pages/StartConversationPage';
import { AccessibilityPage } from './pages/legal/AccessibilityPage';
import { PrivacyPage } from './pages/legal/PrivacyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { FocusedGrowthRetainerPage } from './pages/services/FocusedGrowthRetainerPage';
import { StrategicCompassSprintPage } from './pages/services/StrategicCompassSprintPage';
import { StrategicRepositioningPage } from './pages/services/StrategicRepositioningPage';

/** Central route table: keep in sync with `routePaths.ts` and the sitemap nav. */
export const appRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/strategic-compass-sprint', element: <StrategicCompassSprintPage /> },
      { path: 'services/focused-growth-retainer', element: <FocusedGrowthRetainerPage /> },
      { path: 'services/strategic-repositioning', element: <StrategicRepositioningPage /> },
      { path: 'results', element: <ResultsPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'start-the-conversation', element: <StartConversationPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'accessibility', element: <AccessibilityPage /> },
      { path: 'home', element: <Navigate to="/" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
