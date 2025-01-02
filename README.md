# NestJS with Deno Deploy Template

This template provides a boilerplate to run a **NestJS** application on **Deno Deploy**. It includes instructions for development, testing, and deployment.

---

## Prerequisites

1. **Deno**:
    - Install Deno from [https://deno.land](https://deno.land).

2. **NestJS**:
    - Familiarity with NestJS is recommended.

3. **Deno Deploy** account:
    - Create an account at [https://deno.com/deploy](https://deno.com/deploy).

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fxnoob/nestjs-with-denodeploy-template.git
cd nestjs-with-denodeploy-template
```

### 2. Install Dependencies

Deno does not require `npm install`. Dependencies are managed using the `deno.json`.

Ensure the required modules are included in `deno.json`. If you add new dependencies, update `deno.json` accordingly.

### 3. Run the Application Locally

Use the Deno CLI to run the app:

```bash
deno run dev
```

The application should be accessible at `http://localhost` by default.

---


## Deployment

### 1. Push Code to a Repository
Ensure your code is committed to a version control repository (e.g., GitHub, GitLab).

### 2. Link Repository to Deno Deploy
1. Log in to [Deno Deploy](https://deno.com/deploy).
2. Create a new project and link it to your repository.
3. Configure the build settings:
    - **Entry Point**: Set it to `src/main.ts`.
    - **Permissions**: Grant necessary permissions (e.g., network, environment variables).

### 3. Deploy
Deno Deploy automatically builds and deploys your app after linking it. Any future commits to the repository's default branch will trigger a redeployment.

---

## Environment Variables

To manage environment variables:

1. Use the Deno Deploy dashboard to set environment variables.
2. Access variables in your code using:

```typescript
const MY_VAR = Deno.env.get("MY_VAR");
```

---

## Testing

To test the application locally:

1. Add tests under the `tests/` directory.
2. Run tests using the Deno CLI:

```bash
deno test --allow-net --allow-read
```

---

## Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License.
