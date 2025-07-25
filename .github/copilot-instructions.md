# NestJS Learning Project - AI Coding Instructions

## Project Overview

This is a dual-project learning workspace for "NestJS The Complete Developer's Guide 2025" with two distinct applications:

### Architecture

- **`messages/`**: Full NestJS application with proper module structure, testing, and tooling
- **`scratch/`**: Minimal learning sandbox for experimenting with NestJS concepts

## Key Patterns & Conventions

### Module Organization

- Each feature gets its own module directory under `src/` (e.g., `src/messages/`)
- Module structure: `[feature].module.ts`, `[feature].controller.ts`, optionally `[feature].service.ts`
- Root module bootstrap pattern in `main.ts`: `NestFactory.create(FeatureModule)` for focused apps

### Controller Patterns

```typescript
// Standard controller structure
@Controller('messages')  // Route prefix
export class MessagesController {
  // Methods here become endpoints
}

// API versioning pattern (scratch project)
@Controller('/api')
export class AppController {
  @Get('/hello')    // Results in /api/hello
  @Get('/goodbye')  // Results in /api/goodbye
}
```

### Configuration Differences

- **messages/**: Production-ready with comprehensive tooling (ESLint, Prettier, Jest, e2e tests)
- **scratch/**: Basic setup focusing on core NestJS concepts without extensive tooling

## Development Workflows

### Primary Commands (messages/)

```bash
npm run start:dev    # Development with watch mode
npm run test         # Unit tests
npm run test:e2e     # End-to-end tests
npm run lint         # ESLint with auto-fix
npm run format       # Prettier formatting
```

### Testing Structure

- Unit tests: `[feature].controller.spec.ts` alongside controllers
- E2e tests: `test/` directory with `app.e2e-spec.ts`
- Test pattern: Use `Test.createTestingModule()` for dependency injection setup

### TypeScript Configuration

- Target: ES2023 with decorators enabled (`experimentalDecorators: true`)
- Strict null checks enabled but relaxed any checking for learning
- Source maps and incremental compilation for development

## Project-Specific Guidelines

### When Working on Learning Features

- Use `scratch/` for quick experiments and concept validation
- Use `messages/` for building complete, testable features
- Controllers should follow REST conventions even in learning context

### File Organization

- Keep feature-related files together in their module directories
- Test files should mirror the source file structure
- Configuration files live at project root level

### Development Focus Areas

This codebase is structured for learning:

- Module system and dependency injection patterns
- Controller and routing concepts
- Testing strategies (unit vs e2e)
- Build and development tooling integration
- Progressive feature development from scratch to production-ready

## Integration Points

- Express platform adapter (`@nestjs/platform-express`)
- Jest testing framework with Supertest for e2e
- ESLint + Prettier for code quality (messages project only)
- SWC compiler for faster builds in production setup
