export const getGreeting = (withEmoji = true, customRanges = false) => {
  const hour = new Date().getHours();
  let msg = '';

  if (hour >= 4 && hour < 12) {
    msg = 'صبح بخیر';
  } else if (hour >= 12 && hour < 14) {
    msg = 'ظهر بخیر';
  } else if (hour >= 14 && hour < 18) {
    msg = 'عصر بخیر';
  } else {
    msg = 'شب بخیر';
  }

  if (!withEmoji) return msg;

  const emojis: Record<string, string> = {
    'صبح بخیر': '🌅',
    'ظهر بخیر': '☀️',
    'عصر بخیر': '🌇',
    'شب بخیر': '🌙',
  };

  return `${msg}! ${emojis[msg]}`;
};