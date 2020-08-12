// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get("/apps", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "asdm123312asdnboqwedsa",
          name: "prometheus-operator-app-chart",
          description: "A Helm Chart for Prometheus Operator.",
          version: "0.2.0",
          author: "Giantswarm",
          iconURL:
            "https://raw.githubusercontent.com/prometheus/prometheus.github.io/master/assets/prometheus_logo-cb55bb5c346.png",
          url: "https://github.com/giantswarm/prometheus-operator-app",
          readmeURL:
            "https://raw.githubusercontent.com/giantswarm/prometheus-operator-app/v0.1.1/README.md",
        },
        {
          id: "dsjklnsankj12831209asmdo",
          name: "nginx-ingress-controller-app",
          description: "A Helm chart for the nginx ingress-controller.",
          version: "1.6.9",
          author: "Giantswarm",
          iconURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/500px-Nginx_logo.svg.png",
          url: "https://github.com/giantswarm/nginx-ingress-controller-app",
          readmeURL:
            "https://raw.githubusercontent.com/giantswarm/nginx-ingress-controller-app/v1.6.9/README.md",
        },
      ])
    );
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
