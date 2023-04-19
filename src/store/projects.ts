import learnkit from '../assets/image/learn-kit.png'
import spa from '../assets/image/spa.png'
import freshfood from '../assets/image/fresh-food.png'
import lawliet from '../assets/image/lawliet.png'
import calculator from '../assets/image/calculator.png'
import hofmann from '../assets/image/hofmann.png'
import nvdshop from '../assets/image/nvdshop.png'
import nvd from '../assets/image/nvd.png'
import flashshop from '../assets/image/flashshop.png'
import shopeeui from '../assets/image/shopeeui.png'
import vku from '../assets/image/vku.png'
import blog from '../assets/image/blog.png'
import tcCovid from '../assets/image/tc-covid.png'

export interface Project {
    name?: string,
    author?: string ,
    technology?: string,
    website?: string,
    source?: string,
    responsive?: boolean,
    image?: string,
    category?: string,
    remarkable?: boolean
}
export const projects:Project[] = [
    {
        name: 'Learn kit',
        author: 'Hoang The Luan',
        technology: 'NextJS',
        responsive: true,
        website: 'https://learn-kit.vercel.app/',
        source: 'https://github.com/luantrum27/learn-kit-front-end',
        image: learnkit,
        category: 'nextjs',
        remarkable: true
    },
    {
        name: 'Blog',
        author: 'Hoang The Luan',
        technology: 'NextJS',
        responsive: true,
        website: 'https://next-blog-ref.vercel.app/',
        source: 'https://github.com/luantrum27/next-blog-ref',
        image: blog,
        category: 'nextjs',
    },
    {
        name: 'TC-Covid',
        author: 'Teamw of me',
        technology: 'ReactJS',
        responsive: true,
        website: 'https://tc-covid.web.app/',
        source: 'https://github.com/lamxuanthinh/Projcet_TcCovid',
        image: tcCovid,
        category: 'reactjs',
        remarkable: true
    },
    {
        name: 'Website Spa',
        author: 'Hoang The Luan',
        technology: 'ReactJS',
        responsive: true,
        website: 'https://spa-6cmq.vercel.app/',
        source: 'https://github.com/luantrum27/spa',
        image: spa,
        category: 'reactjs',
        remarkable: true
    },
    {
        name: 'Fresh food',
        author: 'Hoang The Luan',
        technology: 'ReactJS',
        responsive: true,
        website: 'https://fresh-food-ui.vercel.app/',
        source: 'https://github.com/luantrum27/fresh-food',
        image: freshfood,
        category: 'reactjs',
        remarkable: true
    },
    {
        name: 'Lawliet',
        author: 'Hoang The Luan',
        responsive: true,
        technology: 'HTML & SASS, Javascript, PostHTML, 7-1 Pattern, Parcel',
        website: 'https://lawliet-tau.vercel.app/',
        source: 'https://github.com/luantrum27/lawliet',
        image: lawliet,
        category: 'htmlcss',
        remarkable: true
    },
    {
        name: 'Calculator',
        author: 'Hoang The Luan',
        technology: 'HTML & CSS, Javascript',
        responsive: true,
        website: 'https://luantrum27.github.io/Calculator/',
        source: 'https://github.com/luantrum27/Calculator.git',
        image: calculator
        ,
        category: 'htmlcss'
    },
    {
        name: 'Hofmann',
        author: 'Hoang The Luan',
        responsive: true,
        technology: 'HTML & SASS, Javascript, PostHTML, 7-1 Pattern, Parcel',
        website: 'https://practice-html-1vr0qnpyt-dreamtech.vercel.app/',
        source: 'https://github.com/luantrum27/practice_html_css',
        image: hofmann,
        category: 'htmlcss',
        remarkable: true,
    },
    {
        name: 'NVD Shop',
        author: 'Hoang The Luan',
        technology: 'HTML & CSS',
        responsive: false,
        website: 'https://luantrum27.github.io/NVDshop/',
        source: 'https://github.com/luantrum27/NVDshop',
        image: nvdshop,
        category: 'htmlcss'
    },
    {
        name: 'NVD Project',
        author: 'Hoang The Luan',
        technology: 'HTML & CSS',
        responsive: false,
        website: 'https://nhathaof.github.io/trangchuNVD.github.io/',
        source: 'https://github.com/luantrum27/NVDshop',
        image: nvd,
        category: 'htmlcss'
    },
    {
        name: 'FlashShop',
        author: 'Hoang The Luan',
        technology: 'HTML & CSS',
        responsive: false,
        website: 'https://luantrum27.github.io/FlashShop/',
        source: 'https://github.com/luantrum27/FlashShop',
        image: flashshop,
        category: 'htmlcss'
    },
    {
        name: 'Shopee UI',
        author: 'Hoang The Luan',
        technology: 'HTML & CSS',
        responsive: false,
        website: 'https://luantrum27.github.io/shopee-ui/',
        source: 'https://github.com/luantrum27/shopee-ui/',
        image: shopeeui,
        category: 'htmlcss'
    },
    {
        name: 'VKU Project',
        author: 'Hoang The Luan',
        technology: 'HTML & CSS',
        responsive: false,
        website: 'https://luantrum27.github.io/vku_information/',
        source: 'https://github.com/luantrum27/vku_information',
        image: vku,
        category: 'htmlcss'
    },
]