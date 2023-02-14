import { Schema, model } from 'mongoose'
import { ISurat } from '../interface/surat'

const SuratSchema: Schema = new Schema<ISurat>(
  {
    name: { type: String, required: true },
    no: { type: String, required: true },
    date: { type: String, required: true },
    about: { type: String, required: true },
    category: { type: String, required: true },
    uri: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const Surat = model<ISurat>('Surat', SuratSchema)
