export type UserRole = "cmo" | "ceo" | "editor" | "diseñador" | "analista";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export type SocialPlatform = "instagram" | "tiktok" | "youtube" | "facebook" | "linkedin" | "twitter";

export type PostStatus = "borrador" | "en_revision" | "aprobado" | "publicado" | "rechazado" | "programado";

export interface Marca {
  id: string;
  nombre: string;
  color: string;
  redes: SocialPlatform[];
  responsable: string;
  frecuencia_semanal: number;
}

export interface Post {
  id: string;
  titulo: string;
  copy: string;
  hashtags: string[];
  plataforma: SocialPlatform;
  marca_id: string;
  marca?: Marca;
  estado: PostStatus;
  fecha_programada?: string;
  fecha_publicada?: string;
  responsable_id: string;
  responsable?: User;
  media_url?: string;
  engagement?: number;
  alcance?: number;
  views?: number;
  likes?: number;
  comentarios?: number;
  compartidos?: number;
  created_at: string;
  updated_at: string;
}

export interface Aprobacion {
  id: string;
  post_id: string;
  post?: Post;
  solicitado_por: string;
  estado: "pendiente" | "aprobado" | "rechazado";
  comentario?: string;
  vence_en?: string;
  created_at: string;
}

export interface MetricaRed {
  plataforma: SocialPlatform;
  alcance: number;
  alcance_delta: number;
  engagement: number;
  engagement_delta: number;
  seguidores: number;
  seguidores_delta: number;
  posts_mes: number;
}

export interface ObjetivoMes {
  id: string;
  mes: string;
  alcance_meta: number;
  engagement_meta: number;
  posts_meta: number;
  tiempo_aprobacion_horas: number;
}

export interface PilarContenido {
  id: string;
  nombre: string;
  descripcion: string;
  color: string;
  porcentaje: number;
}

export interface Miembro {
  id: string;
  nombre: string;
  email: string;
  rol: UserRole;
  avatar?: string;
  permisos: string[];
}
