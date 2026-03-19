type PRODUCTS = {
  categoryType: string;
  categoryName: string;
  categoryImage: string;
  services: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    timeCompleted: string;
    serviceBonus?: {
      id: number;
      name: string;
      price: number;
      image: string;
    }[];
  }[];
}[];

export type DRINKS = {
  id: number;
  name: string;
  price: number;
}[];

export const products: PRODUCTS = [
  {
    categoryType: "COMBO",
    categoryName: "Gói Combo",
    categoryImage: "/images/cate-image-1.jpg",
    services: [
      {
        id: 1,
        name: "Sơn gell",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 264,
        image: "/images/image-combo-1.jpg",
        timeCompleted: "10 phút",
        serviceBonus: [
          {
            id: 1,
            name: "Da heo",
            price: 88,
            image: "",
          },
          {
            id: 2,
            name: "Nhũ",
            price: 88,
            image: "",
          },
        ],
      },
      {
        id: 2,
        name: "Mắt mèo",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 88,
        image: "/images/image-combo-2.jpg",
        timeCompleted: "10 phút",
      },
      {
        id: 3,
        name: "Sơn nhũ",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 264,
        image: "/images/image-combo-3.jpg",
        timeCompleted: "10 phút",
      },
      {
        id: 4,
        name: "Sơn gel",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 88,
        image: "/images/image-combo-3.jpg",
        timeCompleted: "10 phút",
      },
    ],
  },
  {
    categoryType: "MEDICURE",
    categoryName: "Medicure",
    categoryImage: "/images/cate-image-2.png",
    services: [
      {
        id: 1,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 2,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 3,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 4,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 5,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 6,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 7,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
    ],
  },
  {
    categoryType: "PREDICURE",
    categoryName: "Predicure",
    categoryImage: "/images/cate-image-3.png",
    services: [
      {
        id: 1,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 2,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 3,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 4,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
    ],
  },
  {
    categoryType: "ANIMATION",
    categoryName: "Hiệu ứng",
    categoryImage: "/images/cate-image-4.png",
    services: [
      {
        id: 1,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 2,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 3,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 4,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 5,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 6,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
      {
        id: 7,
        name: "Perfectly Pollished",
        description: "Làm mới màu sắc, (Mani hoặc Pedi)...",
        price: 390,
        image: "",
        timeCompleted: "10 phút",
      },
    ],
  },
];

export const drinks: DRINKS = [
  {
    id: 1,
    name: "Latte",
    price: 390,
  },
  {
    id: 2,
    name: "Espresso",
    price: 390,
  },
  {
    id: 3,
    name: "Americano",
    price: 390,
  },
  {
    id: 4,
    name: "Cappuccino",
    price: 390,
  },
  {
    id: 5,
    name: "Milkshake",
    price: 390,
  },
  {
    id: 6,
    name: "Juice",
    price: 390,
  },
];
