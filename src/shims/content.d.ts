declare module '@/content/luz-peima.json' {
    export interface LuzPeima {
        moadim: Array<MoeedPeima>;
    }

    export interface MoeedPeima {
        class?: string;
        setting: string; 
        zman: [string, number, string];
        duration: number;
        isBackground?: boolean;
        mentors?: string[]
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
        discipline?: string;
        content: string;
        duration: number;
        class?: string;
        isBackground: boolean;
        mentors?: string[]
    }

    type SohhbetSettings = Partial<Record<string, SohhbetSetting>>

    const sohhbetSettings: SohhbetSettings

    export default sohhbetSettings;
}

declare module '@/content/sohhbet-mentors.json' {
    export interface SohhbetMentor {
        name: string;
    }

    type SohhbetMentors = Record<string, SohhbetMentor>

    const sohhbetMentors: SohhbetMentors

    export default sohhbetMentors;
}