<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS Learning Project - Messages Application

## Project Overview

This is the **production-ready** part of a dual-project learning workspace for "NestJS The Complete Developer's Guide 2025". This messages application demonstrates proper NestJS architecture with full tooling, testing, and best practices.

### Architecture

- **`messages/`** (this project): Full NestJS application with comprehensive tooling and testing
- **`scratch/`** (sibling project): Minimal learning sandbox for quick experiments

## Learning Objectives

- Master NestJS module system and dependency injection
- Implement REST API controllers with proper routing
- Write comprehensive tests (unit and e2e)
- Use production-ready development tooling
- Follow TypeScript and NestJS best practices

## Project Structure

```
messages/
├── src/
│   ├── messages/           # Messages feature module
│   │   ├── messages.controller.ts
│   │   ├── messages.controller.spec.ts
│   │   ├── messages.service.ts
│   │   └── messages.module.ts
│   └── main.ts            # Application bootstrap
├── test/                  # E2E tests
└── ...configuration files
```

## Development Setup

```bash
# Install dependencies
$ npm install

# Development with hot reload
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Testing

```bash
# Unit tests
$ npm run test

# Unit tests with watch mode
$ npm run test:watch

# E2E tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

## Code Quality

```bash
# Lint and auto-fix issues
$ npm run lint

# Format code with Prettier
$ npm run format
```

## Key Features

### Module Architecture
- Feature-based module organization
- Proper dependency injection setup
- Controller and service separation

### Testing Strategy
- Unit tests for controllers and services
- E2E tests for complete request/response cycles
- Comprehensive test coverage tracking

### Development Tooling
- ESLint for code quality
- Prettier for consistent formatting
- Jest testing framework
- TypeScript with strict configuration

## Learning Progress

This project builds from basic NestJS concepts to production-ready patterns:

1. **Controllers & Routing**: REST endpoints with proper HTTP methods
2. **Modules & DI**: Feature modules with dependency injection
3. **Testing**: Unit and integration test strategies
4. **Tooling**: Professional development workflow

## Comparison with Scratch Project

| Feature | Messages (this) | Scratch |
|---------|----------------|---------|
| Purpose | Production patterns | Quick experiments |
| Testing | Full test suite | Minimal/none |
| Tooling | ESLint, Prettier | Basic setup |
| Structure | Feature modules | Single files |
| Focus | Best practices | Learning concepts |

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Discord](https://discord.gg/G7Qnnhy)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Technology Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Platform**: Node.js with Express
- **Testing**: Jest + Supertest
- **Build**: SWC compiler
- **Linting**: ESLint + Prettier

## License

This learning project is for educational purposes. NestJS is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
