# Quick Drive

A lightweight, highly customizable online drive with a friendly user interface. Quick Drive provides a modern and efficient way to manage your files in the cloud.

## 🚀 Features

- Modern and intuitive user interface
- File upload and management
- Secure file storage
- Real-time updates
- Responsive design

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) - React framework for production
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Database:** 
  - [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
  - [LibSQL](https://libsql.org/) - SQLite-compatible database
- **Authentication:** (To be implemented)
- **Deployment:** (To be implemented)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v10.8.1 or higher)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quick-drive.git
   cd quick-drive
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration values.

4. **Set up the database**
   ```bash
   pnpm db:generate  # Generate database migrations
   pnpm db:push     # Push migrations to database
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format:write` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm db:studio` - Open Drizzle Studio for database management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- George Okez - Initial work

## 🙏 Acknowledgments

- Thanks to all contributors who have helped this project grow
- Special thanks to the open-source community for the amazing tools and libraries

