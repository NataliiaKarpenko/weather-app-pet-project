export const theme = isDarkMode => {
  return {
    transition: 'all 300ms ease-out',

    media: {
      sx: '(max-width: 374px)',
      phone: '(min-width: 375px)',
      tab: '(min-width: 768px)',
      desktop: '(min-width: 1440px)',
    },

    globalColors: {
      buttonBg: '#0095FF',
      buttonText: '#94DEFE',
      error: '#D50201',
      welcomePageBackground: '#4C5360',
      mainBackground: '#4C5360',
    },

    mainPageBackground: `${isDarkMode ? '#030303' : '#a5bdfd'}`,
    containerBackground: `${isDarkMode ? '#0B121E' : '#d5def5'}`,
    modalBackground: `${isDarkMode ? '#21273d' : '#c4c1e0'}`,
    contentBackground: `${isDarkMode ? '#212B3C' : '#a6b1e1'}`,
    primaryText: `${isDarkMode ? '#EFF2F1' : '#424874'}`,
    secondaryText: `${isDarkMode ? '#6D747D' : '#6a759b'}`,
    title: `${isDarkMode ? '#9399A2' : '#6a759b'}`,
    activeLink: `${isDarkMode ? '#F0F1F1' : '#46466e'}`,
    placeholder: `${isDarkMode ? 'rgba(250, 250, 250, 0.5)' : '#65799b'}`,
    input: `${isDarkMode ? 'rgba(250, 250, 250)' : '#4c5374'}`,
    boxShadow: `${isDarkMode ? '#323643' : '#4c5374'}`,
  };
};
