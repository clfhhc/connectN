// Robust way to check if it's Node or browser
const checkServer = (): boolean => typeof window === 'undefined';

export default checkServer;
