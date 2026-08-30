(function () {
  try {
    var locale = localStorage.getItem('portfolio-locale');
    var isArabic = locale === 'ar';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  } catch (e) {}
})();
