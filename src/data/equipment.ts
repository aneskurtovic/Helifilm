export type EquipmentCategory = "drones" | "fpv" | "cameras" | "certs";

export interface EquipmentItem {
  name: string;
  spec: string;
  category: EquipmentCategory;
}

export const equipmentItems: EquipmentItem[] = [
  { name: "DJI Inspire 3", spec: "8K ProRes RAW · Zenmuse X9-8K", category: "drones" },
  { name: "DJI Mavic 3 Pro", spec: "5.1K Hasselblad · triple-camera · 43min", category: "drones" },
  { name: "Freefly Alta X", spec: "Heavy-lift · cinema payload", category: "drones" },

  { name: "Cinematic FPV (custom)", spec: "5\" · 7\" · naked GoPro", category: "fpv" },
  { name: "DJI Avata 2", spec: "Tight interiors · 4K 100fps", category: "fpv" },

  { name: "DJI Ronin 4D", spec: "6K ProRes · 4-axis · LiDAR focus", category: "cameras" },
  { name: "DZOFilm Catta Ace", spec: "35–80 T2.9 · 70–135 T2.9 cine zooms", category: "cameras" },

  { name: "BHDCA A2 · A3 · SPEC", spec: "Full EU airspace coverage", category: "certs" },
  { name: "Insurance", spec: "Commercial liability · on file", category: "certs" },
];

export const categoryOrder: EquipmentCategory[] = ["drones", "fpv", "cameras", "certs"];
