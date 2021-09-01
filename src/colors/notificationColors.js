const { shadeColor } = require('../utils/transformColor');

// Notification Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_notification-colors

module.exports = (theme) => ({
  'notificationCenter.border': theme.transparent,
  'notificationCenterHeader.foreground': shadeColor(theme.foreground, -25),
  'notificationCenterHeader.background': shadeColor(theme.background, -50),
  'notificationToast.border': theme.transparent,
  'notifications.foreground': theme.foreground,
  'notifications.background': shadeColor(theme.background, -50),
  'notifications.border': theme.transparent,
  'notificationLink.foreground': theme.info
});
