/*
 * Builds the page from window.SITE_DATA (see data/site-data.js).
 * Uses textContent only (no innerHTML), so content is never parsed as HTML.
 */
(() => {
  'use strict';

  const data = window.SITE_DATA;
  if (!data) {
    console.error('data/site-data.js did not load.');
    return;
  }

  /* ── helpers ────────────────────────────────────────────── */
  const el = (tag, props = {}, ...children) => {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props)) {
      if (value === null || value === undefined || value === false) continue;
      node.setAttribute(key, value);
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === false) continue;
      node.append(child);
    }
    return node;
  };

  const isExternal = (href) => /^https?:\/\//i.test(href);

  const anchor = (href, text, className) =>
    el('a', {
      href,
      class: className,
      target: isExternal(href) ? '_blank' : null,
      rel: isExternal(href) ? 'noopener noreferrer' : null
    }, text);

  const mount = (id, ...nodes) => {
    const target = document.getElementById(id);
    if (target) target.replaceChildren(...nodes.flat().filter(Boolean));
  };

  /* ── hero ───────────────────────────────────────────────── */
  mount('hero-intro', data.intro.map((p) => el('p', {}, p)));
  mount('hero-focus', data.focus.join(', '));

  const heroLinks = [];
  if (data.resume && data.resume.url) {
    heroLinks.push({ label: 'Resume', href: data.resume.url });
  }
  data.contact.links.forEach((l) => heroLinks.push({ label: l.label, href: l.href }));
  mount('hero-links', heroLinks.map((l, i) =>
    anchor(l.href, l.label, i === 0 ? 'btn btn-primary' : 'btn')
  ));

  /* ── achievements ───────────────────────────────────────── */
  mount('achievements-body',
    el('ul', { class: 'metrics' }, data.achievements.map((a) =>
      el('li', {},
        el('span', { class: 'metric-value' }, a.value),
        el('span', { class: 'metric-label' }, a.label)
      )
    ))
  );

  /* ── work history ───────────────────────────────────────── */
  mount('experience-body',
    el('ol', { class: 'timeline' }, data.experience.map((role) =>
      el('li', { class: 'role' },
        el('div', { class: 'role-head' },
          el('h3', {}, role.title),
          el('p', { class: 'role-dates' }, role.dates)
        ),
        el('p', { class: 'role-org' }, [role.company, role.location].filter(Boolean).join(', ')),
        role.summary && el('p', { class: 'role-summary' }, role.summary),
        el('ul', { class: 'role-points' }, role.highlights.map((h) => el('li', {}, h))),
        role.tech && el('p', { class: 'stack' },
          el('span', { class: 'stack-label' }, 'Tech'),
          role.tech.join(', ')
        )
      )
    ))
  );

  /* ── projects ───────────────────────────────────────────── */
  mount('projects-body',
    el('div', { class: 'projects' }, data.projects.map((p) =>
      el('article', { class: 'project' },
        el('h3', {}, p.title),
        el('dl', { class: 'facts' },
          el('dt', {}, 'Problem'), el('dd', {}, p.problem),
          el('dt', {}, 'Built'),   el('dd', {}, p.built),
          el('dt', {}, 'Impact'),  el('dd', {}, p.impact)
        ),
        el('p', { class: 'stack' },
          el('span', { class: 'stack-label' }, 'Tech'),
          p.tech.join(', ')
        ),
        p.link && p.link.href && el('p', { class: 'project-link' }, anchor(p.link.href, p.link.label))
      )
    ))
  );

  /* ── skills ─────────────────────────────────────────────── */
  mount('skills-body',
    el('div', { class: 'skills' }, data.skills.map((group) =>
      el('div', { class: 'skill-group' },
        el('h3', {}, group.category),
        el('ul', { class: 'tags' }, group.items.map((item) => el('li', {}, item)))
      )
    ))
  );

  /* ── learning & documents ───────────────────────────────── */
  const docItem = (d) =>
    el('li', {},
      d.url ? anchor(d.url, d.title) : el('span', { class: 'doc-title' }, d.title),
      !d.url && el('span', { class: 'soon' }, 'Coming soon'),
      d.note && el('p', { class: 'doc-note' }, d.note)
    );

  const docGroups = [{ group: 'Resume', items: data.resume ? [data.resume] : [] }, ...data.documents];

  mount('learning-body',
    el('div', { class: 'block' },
      el('h3', {}, 'Currently learning'),
      el('ul', { class: 'learning-list' }, data.learning.map((l) =>
        el('li', {}, el('strong', {}, l.topic), el('span', {}, l.note))
      ))
    ),
    el('div', { class: 'block' },
      el('h3', {}, 'Documents'),
      el('div', { class: 'doc-groups' }, docGroups.map((g) =>
        el('div', { class: 'doc-group' },
          el('h4', {}, g.group),
          g.items.length
            ? el('ul', { class: 'doc-list' }, g.items.map(docItem))
            : el('p', { class: 'soon' }, 'Coming soon')
        )
      ))
    )
  );

  /* ── contact ────────────────────────────────────────────── */
  mount('contact-body',
    el('p', { class: 'contact-text' }, data.contact.text),
    el('ul', { class: 'contact-list' }, data.contact.links.map((l) =>
      el('li', {}, el('span', {}, l.label), anchor(l.href, l.text || l.href))
    ))
  );

  /* ── footer year ────────────────────────────────────────── */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ── nav: mark the section currently in view ────────────── */
  const navLinks = [...document.querySelectorAll('.nav a')];
  const byId = new Map(navLinks.map((a) => [a.getAttribute('href').slice(1), a]));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = byId.get(entry.target.id);
        if (!link || !entry.isIntersecting) return;
        navLinks.forEach((a) => a.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'location');
      });
    }, { rootMargin: '-35% 0px -60% 0px' });

    byId.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
})();
