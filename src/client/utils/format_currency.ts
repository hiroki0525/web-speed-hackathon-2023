const formatter = new Intl.NumberFormat('ja-JP', { currency: 'JPY', style: 'currency' });

export const formatCurrency = (price: number) => formatter.format(price);
