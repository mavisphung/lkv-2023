
export type TabElement = {
  name: string;
  route: string;
};

export type FooterElement = {
  title: string;
  content: string[] | TabElement[];
  type: "text" | "tab" | "logo";
}

