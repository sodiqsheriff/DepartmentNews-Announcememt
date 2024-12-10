declare module 'sanity' {
    export interface Rule {
      required: () => Rule;
      max: (length: number) => Rule;
      min: (length: number) => Rule;
      optional: () => Rule;
    }
  }
  