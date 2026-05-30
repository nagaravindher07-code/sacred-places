export interface Image {
  src: string;
  alt: string;
  title: string;
  aspect: number;
}

export const heroImage: Image = {
  src: "/images/thumb.jpg",
  alt: "Hero photograph",
  title: "Sacred Places",
  aspect: 16 / 9,
};

export const galleryImages: Image[] = [
  {
    src: "/images/sacred-01.jpg",
    alt: "Gallery photo 1",
    title: "Frame 01",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-02.jpg",
    alt: "Gallery photo 2",
    title: "Frame 02",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-03.jpg",
    alt: "Gallery photo 3",
    title: "Frame 03",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-04.jpg",
    alt: "Gallery photo 4",
    title: "Frame 04",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-05.jpg",
    alt: "Gallery photo 5",
    title: "Frame 05",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-06.jpg",
    alt: "Gallery photo 6",
    title: "Frame 06",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-07.jpg",
    alt: "Gallery photo 7",
    title: "Frame 07",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-08.jpg",
    alt: "Gallery photo 8",
    title: "Frame 08",
    aspect: 4 / 5,
  },
  {
    src: "/images/sacred-09.jpg",
    alt: "Gallery photo 9",
    title: "Frame 09",
    aspect: 4 / 5,
  },
];
