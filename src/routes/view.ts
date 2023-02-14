import { Router } from 'express'
import { Request, Response } from 'express'
import { Surat } from '../models/surat'

export const router = Router()

router.get('/signin', async (req: Request, res: Response) => {
  if (req.session.user) return res.redirect('/')

  return res.render('user/signin', {
    layout: 'layout',
    notification: req.flash('notification'),
  })
})

router.get('/surat', async (req: Request, res: Response) => {
  if (!req.session.user) return res.redirect('/signin')
  const { category, query, column } = req.query

  const surats = await Surat.find({
    category,
    [column!.toString()]: { $regex: query, $options: 'i' },
  })

  return res.render('user/surat', {
    layout: 'layout',
    notification: req.flash('notification'),
    surats,
    category,
    query,
    column,
  })
})

router.get('/password', async (req: Request, res: Response) => {
  if (!req.session.user) return res.redirect('/signin')

  return res.render('user/password', {
    layout: 'layout',
    notification: req.flash('notification'),
  })
})

router.get('/', async (req: Request, res: Response) => {
  if (!req.session.user) return res.redirect('/signin')

  const suratMasukCount = await Surat.find({ category: 'Surat Masuk' }).count()
  const suratKeluarCount = await Surat.find({
    category: 'Surat Keluar',
  }).count()

  const surats = await Surat.find().sort({ _id: -1 }).limit(6)

  return res.render('user/index', {
    layout: 'layout',
    notification: req.flash('notification'),
    suratMasukCount,
    suratKeluarCount,
    surats,
  })
})
