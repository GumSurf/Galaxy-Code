// src/components/util/getTimeDifference.ts

export const getTimeDifference = (date: string): string => {
    const now = new Date();
    const then = new Date(date);
    const diff = now.getTime() - then.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `il y a ${years} an${years > 1 ? 's' : ''}`;
    if (months > 0) return `il y a ${months} mois`;
    if (weeks > 0) return `il y a ${weeks} semaine${weeks > 1 ? 's' : ''}`;
    if (days > 0) return `il y a ${days} jour${days > 1 ? 's' : ''}`;
    if (hours > 0) return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    if (minutes > 0) return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    return `il y a ${seconds} seconde${seconds > 1 ? 's' : ''}`;
};
