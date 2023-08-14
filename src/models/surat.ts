import { Schema, model } from 'mongoose'
import { ISurat } from '../interface/surat'

const SuratSchema: Schema = new Schema<ISurat>(
  {
    no: { type: String, required: true },
    date: { type: String, required: true },
    about: { type: String, required: true },
    category: { type: String, required: true },
    uri: { type: String, required: true },
    tujuan: { type: String, required: true, default: '-' },
    asal: { type: String, required: true, default: '-' },
  },
  {
    timestamps: true,
  }
)

export const Surat = model<ISurat>('Surat', SuratSchema)
