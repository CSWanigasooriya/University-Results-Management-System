import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
    title: string;
    remember: boolean;
    n1title: string;
    n1link: string;
    n2title: string;
    n2link: string;
    n3title: string;
    n3link: string;
}

export const AppConfig: AppConfig = {
    title: 'URMS',
    remember: false,
    n1title: 'Guidlines for Home Quarantine',
    n1link: 'http://epid.gov.lk/',
    n2title: 'Submissions for KDU Law Journal',
    n2link: 'https://www.kdu.ac.lk/kdu-law-journal-2020/',
    n3title: `Course on 'Cultural linkages towards and asian Ideology'`,
    n3link: 'https://www.kdu.ac.lk/department-of-social-science/',
};
