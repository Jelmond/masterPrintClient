// Yandex Metrica types
declare global {
  interface Window {
    ym?: (
      counterId: number,
      method: string,
      target: string,
      params?: { order_price?: number }
    ) => void;
  }
}

export {};

