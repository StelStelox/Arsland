import { atom } from 'recoil';

export const titlebarBackBtn = atom({
    key: 'titlebar.backBtn',
    default: {
        show: false,
    },
});

export const titlebarTitle = atom({
    key: 'titlebar.title',
    default: {
        show: true,
        text: 'Arsland Launcher v0.0.1-dev',
    },
});

export const titlebarUser = atom({
    key: 'titlebar.user',
    default: {
        show: false,
        username: 'Test',
    },
});
