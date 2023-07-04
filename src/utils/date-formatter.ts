const LOCALE = 'en-US';

class DateFormatter {
  private _dateFormatter?: Intl.DateTimeFormat;

  constructor() {
    this.formatDate = this.formatDate.bind(this);
  }

  private get dateFormatter() {
    if (!this._dateFormatter) {
      this._dateFormatter = new Intl.DateTimeFormat(LOCALE, {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    }

    return this._dateFormatter;
  }

  /**
    Returns the date in the format depending on the locale:
    - English: January 09, 2023
  */
  formatDate(value: Date) {
    return this.dateFormatter.format(value);
  }
}

export const dateFormatter = new DateFormatter();
