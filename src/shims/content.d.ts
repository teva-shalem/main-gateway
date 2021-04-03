declare module '@/content/luz-peima.json' {
    export interface LuzPeima {
        moadim: Array<{setting: string; zman: [string, number, string]}>;
    }

    const luzPeima: LuzPeima

    export default luzPeima;
}
declare module '@/content/oganey-zman.json' {
    export interface OganeyZman {
        shavuot: {[subject: string]: string;};
    }

    const oganeyZman: OganeyZman

    export default oganeyZman;
}

declare module '@/content/sohhbet-settings.json' {
    export interface SohhbetSetting {
        subject: string;
        discipline: string;
        content: string;
        duration: number;
    }

    type SohhbetSettings = Partial<Record<string, SohhbetSetting>>

    const sohhbetSettings: SohhbetSettings

    export default sohhbetSettings;
}