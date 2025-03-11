import { Router, Request, Response } from 'express'

const pageRouter = Router()

pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('index', {
    title: 'Home',
    message: 'Hello, World!',
    showYear: true
  })
})

pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', {
    title: 'About',
    message: 'This is the about page'
  })
})

pageRouter.get('/contact', (req: Request, res: Response) => {
  res.status(200).render('contact', {
    title: 'Contact',
    content: 'When you need to reach out to us, use the following contacts',
    contacts: ['sample@gmail.com', '123-456-7890']
  })
})

export default pageRouter