export default context => {
  context.localePath = url =>
    context.i18n.locale === context.i18n.defaultLocale
      ? url
      : `${context.i18n.locale}/${url}`;
};
