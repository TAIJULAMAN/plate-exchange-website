import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'

export default function BlogDetails() {
  const { id } = useParams()

  const article = {
    id: id,
    title: "I Created A Developer Rap Video – Here's What I Learned",
    author: 'Jane Doe',
    publishedAt: 'June 12, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&h=400&fit=crop',
    content: {
      intro: `Finding a trusted contractor for your home improvement needs can feel like a daunting task. With so many options out there, how do you ensure you’re hiring someone who’s not only skilled but also reliable and professional? At YourTradeSource (YTS), we’ve made it our mission to connect homeowners with licensed, vetted, and verified professionals in industries like plumbing, electrical work, HVAC, and construction. Here’s how to simplify the process and find the right fit for your next project.

1. Start with the Right Information
`,
      collaboration: `Working collaboration for project management has become more important than ever.. . Finding a trusted contractor for your home improvement needs can feel like a daunting task. With so many options out there, how do you ensure you’re hiring someone who’s not only skilled but also reliable and professional? At YourTradeSource (YTS), we’ve made it our mission to connect homeowners with licensed, vetted, and verified professionals in industries like plumbing, electrical work, HVAC, and construction. Here’s how to simplify the process and find the right fit for your next project.`,
    }
  }

  const recentPosts = [
    {
      id: 2,
      title: 'TV Dragon Sells Number Plate With PlateXpress',
      author: 'John Smith',
      publishedAt: 'July 8, 2024',
      description:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Why Side Projects Can Boost Your Career',
      author: 'Sarah Lee',
      publishedAt: 'July 1, 2024',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Mastering Remote Collaboration in 2024',
      author: 'Michael Chen',
      publishedAt: 'June 20, 2024',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=200&fit=crop'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <span>{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.publishedAt}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 lg:h-80 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2">
          <div className="mb-6">
            <div className="flex items-center text-gray-600 text-sm mb-4">
              
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>{article.content.intro}</p>

           
          
          </div>
        </div>
      </div>

      {/* Extended Content */}
      <div className="mb-12">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          
          <p>{article.content.collaboration}</p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
            Looking Forward
          </h3>
          <p>{article.content.conclusion}</p>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Share this article:
            </h4>
            <div className="flex gap-4">
              <button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-blue-400 hover:bg-blue-500 rounded flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-blue-700 hover:bg-blue-800 rounded flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="border-t border-gray-200 pt-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Recent Posts</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Check out our latest articles and insights
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              SEE ALL POSTS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h4 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2">
                  {post.title}
                </h4>

                {/* Author + Date */}
                {post.author && post.publishedAt && (
                  <div className="text-gray-500 text-sm mb-4">
                    {post.author} • {post.publishedAt}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/details/${post.id}`}
                  className="mt-auto text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
