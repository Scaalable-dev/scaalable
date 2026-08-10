import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import "./NotFound.css";

import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Scaalable";
  }, []);

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__glow" aria-hidden="true" />

      <Container>
        <div className="not-found__panel">
          <div className="animate-fade-up">
            <Badge>Page not found</Badge>
          </div>

          {/* The status code is decoration — the heading below carries the
              message, so screen readers are not greeted with "four hundred
              and four". */}
          <p className="not-found__code animate-fade-up" aria-hidden="true">
            404
          </p>

          <h1
            className="not-found__title animate-fade-up"
            id="not-found-title"
            style={{ "--delay": "80ms" }}
          >
            We couldn&rsquo;t find that page.
          </h1>

          <p
            className="not-found__description animate-fade-up"
            style={{ "--delay": "160ms" }}
          >
            The link may be outdated, or the address may have a typo.
            Everything Scaalable offers is still a click away.
          </p>

          <div
            className="not-found__actions animate-fade-up"
            style={{ "--delay": "240ms" }}
          >
            <Button
              as={Link}
              to="/"
              size="lg"
              startIcon={<ArrowLeft size={18} />}
            >
              Back to Home
            </Button>

            <Button as={Link} to="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
