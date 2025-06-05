export default function renderAbout(about) {
  return renderProfile(about) + renderBio(about);
}

export function renderProfile(about) {
  return `<section class="box profile">
        <img
          class="profile-img"
          src=${about.photo}
          alt="Profile Image of Mira Yun"
        />
        <h1>${about.name}</h1>
        <h3>${about.title}</h3>
        <p>
          <a
            href="https://bc.edu/content/bc-web/schools/mcas/departments/computer-science.html"
            target="_blank"
          >
            ${about.department}</a
          >
          <br />
          <a href="http://www.bc.edu" target="_blank">${about.university}</a> <br />
          ${about.address} <br /><br />
          <i class="fa-solid fa-square-phone-flip"></i> Phone:
          <a href="tel:+16175223686">${about.phone}</a> <br />
          <i class="fa-solid fa-square-envelope"></i> Email:
          <a href="mailto:${about.email}">${about.email}</a> <br />
          <i class="fa-solid fa-house-user"></i> URL:
          <a href="${about.url}">${about.url} </a>
        </p>
      </section>`;
}

export function renderBio(about) {
  return `<section class="box bio">
        <div class="card text-bg-light mb-3">
          <div class="card-body">
            <p class="card-text">
              ${about.bio}
            </p>
          </div>
        </div>
      </section>`;
}
