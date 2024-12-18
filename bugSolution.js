```javascript
// This solution might involve checking the next.js version, app directory structure or removing conflicting middleware.
// Ensure that you have the latest version of Next.js.
// Verify that your app directory structure is correct. For example, you should have a pages directory containing index.js
// Make sure that any middleware you are using is not conflicting with the default route.

// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}
```