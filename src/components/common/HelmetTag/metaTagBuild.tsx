import React from "react";
interface IDefalts{
  templateTitle: string,
  noindex: boolean,
  openGraph: {
    defaultImageHeight: string,
    defaultImageWidth: string
  }
}
const defaults : IDefalts= {
  templateTitle: "",
  noindex: false,
  openGraph: {
    defaultImageHeight: "",
    defaultImageWidth: ""
  }
};


const buildTags = (meta:any) => {
  const tagsToRender = [];

  // tagsToRender.push(<meta property="og:type" content="website" />);

  if (meta.titleTemplate) {
    defaults.templateTitle = meta.titleTemplate;
  }

  if (meta.title) {
    let updatedTitle = meta.title;
    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, () => updatedTitle);
    }
    tagsToRender.push(<title key="title">{updatedTitle}</title>);
  }

  if (meta.noindex === false) {
    tagsToRender.push(
      <meta key="robots" name="robots" content="index,follow" />
    );
    tagsToRender.push(
      <meta key="googlebot" name="googlebot" content="index,follow" />
    );
  } else if (
    meta.noindex ||
    defaults.noindex ||
    meta.dangerouslySetAllPagesToNoIndex
  ) {
    if (meta.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }
    tagsToRender.push(
      <meta key="robots" name="robots" content="noindex,nofollow" />
    );
    tagsToRender.push(
      <meta key="googlebot" name="googlebot" content="noindex,nofollow" />
    );
  } else {
    tagsToRender.push(
      <meta key="robots" name="robots" content="index,follow" />
    );
    tagsToRender.push(
      <meta key="googlebot" name="googlebot" content="index,follow" />
    );
  }

  if (meta.description) {
    tagsToRender.push(
      <meta key="description" name="description" content={meta.description} />
    );
  }

  if (meta.hasOwnProperty("twitter")) {
    if (meta.twitter.cardType) {
      tagsToRender.push(
        <meta
          key="twitter:card"
          name="twitter:card"
          content={meta.twitter.cardType}
        />
      );
    }

    if (meta.twitter.site) {
      tagsToRender.push(
        <meta
          key="twitter:site"
          name="twitter:site"
          content={meta.twitter.site}
        />
      );
    }

    if (meta.twitter.handle) {
      tagsToRender.push(
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={meta.twitter.handle}
        />
      );
    }
  }

  if (meta.hasOwnProperty("facebook")) {
    if (meta.facebook.appId) {
      tagsToRender.push(
        <meta
          key="fb:app_id"
          property="fb:app_id"
          content={meta.facebook.appId}
        />
      );
    }
  }

  if (meta.hasOwnProperty("openGraph")) {
    if (meta.openGraph.url) {
      tagsToRender.push(
        <meta key="og:url" property="og:url" content={meta.openGraph.url} />
      );
    }

    if (meta.openGraph.type) {
      const type = meta.openGraph.type.toLowerCase();

      tagsToRender.push(
        <meta key="og:type" property="og:type" content={type} />
      );

      if (type === "profile" && meta.openGraph.profile) {
        if (meta.openGraph.profile.firstName) {
          tagsToRender.push(
            <meta
              key="profile:first_name"
              property="profile:first_name"
              content={meta.openGraph.profile.firstName}
            />
          );
        }

        if (meta.openGraph.profile.lastName) {
          tagsToRender.push(
            <meta
              key="profile:last_name"
              property="profile:last_name"
              content={meta.openGraph.profile.lastName}
            />
          );
        }

        if (meta.openGraph.profile.username) {
          tagsToRender.push(
            <meta
              key="profile:username"
              property="profile:username"
              content={meta.openGraph.profile.username}
            />
          );
        }

        if (meta.openGraph.profile.gender) {
          tagsToRender.push(
            <meta
              key="profile:gender"
              property="profile:gender"
              content={meta.openGraph.profile.gender}
            />
          );
        }
      } else if (type === "book" && meta.openGraph.book) {
        if (
          meta.openGraph.book.authors &&
          meta.openGraph.book.authors.length
        ) {
          meta.openGraph.book.authors.forEach((author:any, index:any) => {
            tagsToRender.push(
              <meta
                key={`book:author:0${index}`}
                property="book:author"
                content={author}
              />
            );
          });
        }

        if (meta.openGraph.book.isbn) {
          tagsToRender.push(
            <meta
              key="book:isbn"
              property="book:isbn"
              content={meta.openGraph.book.isbn}
            />
          );
        }

        if (meta.openGraph.book.releaseDate) {
          tagsToRender.push(
            <meta
              key="book:release_date"
              property="book:release_date"
              content={meta.openGraph.book.releaseDate}
            />
          );
        }

        if (meta.openGraph.book.tags && meta.openGraph.book.tags.length) {
          meta.openGraph.book.tags.forEach((tag:any, index:any) => {
            tagsToRender.push(
              <meta
                key={`book:tag:0${index}`}
                property="book:tag"
                content={tag}
              />
            );
          });
        }
      } else if (type === "article" && meta.openGraph.article) {
        if (meta.openGraph.article.publishedTime) {
          tagsToRender.push(
            <meta
              key="article:published_time"
              property="article:published_time"
              content={meta.openGraph.article.publishedTime}
            />
          );
        }

        if (meta.openGraph.article.modifiedTime) {
          tagsToRender.push(
            <meta
              key="article:modified_time"
              property="article:modified_time"
              content={meta.openGraph.article.modifiedTime}
            />
          );
        }

        if (meta.openGraph.article.expirationTime) {
          tagsToRender.push(
            <meta
              key="article:expiration_time"
              property="article:expiration_time"
              content={meta.openGraph.article.expirationTime}
            />
          );
        }

        if (
          meta.openGraph.article.authors &&
          meta.openGraph.article.authors.length
        ) {
          meta.openGraph.article.authors.forEach((author:any, index:any) => {
            tagsToRender.push(
              <meta
                key={`article:author:0${index}`}
                property="article:author"
                content={author}
              />
            );
          });
        }

        if (meta.openGraph.article.section) {
          tagsToRender.push(
            <meta
              key="article:section"
              property="article:section"
              content={meta.openGraph.article.section}
            />
          );
        }

        if (
          meta.openGraph.article.tags &&
          meta.openGraph.article.tags.length
        ) {
          meta.openGraph.article.tags.forEach((tag:any, index:any) => {
            tagsToRender.push(
              <meta
                key={`article:tag:0${index}`}
                property="article:tag"
                content={tag}
              />
            );
          });
        }
      }
    }

    if (meta.openGraph.title) {
      tagsToRender.push(
        <meta
          key="og:title"
          property="og:title"
          content={meta.openGraph.title}
        />
      );
    }

    if (meta.openGraph.description) {
      tagsToRender.push(
        <meta
          key="og:description"
          property="og:description"
          content={meta.openGraph.description}
        />
      );
    }

    if (meta.openGraph.images && meta.openGraph.images.length) {
      meta.openGraph.images.forEach((image:any, index:any) => {
        tagsToRender.push(
          <meta
            key={`og:image:0${index}`}
            property="og:image"
            content={image.url}
          />
        );

        if (image.alt) {
          tagsToRender.push(
            <meta
              key={`og:image:alt0${index}`}
              property="og:image:alt"
              content={image.alt}
            />
          );
        }

        if (image.width) {
          tagsToRender.push(
            <meta
              key={`og:image:width0${index}`}
              property="og:image:width"
              content={image.width}
            />
          );
        } else if (
          defaults.openGraph.defaultImageWidth ||
          meta.openGraph.defaultImageWidth
        ) {
          if (meta.openGraph.defaultImageWidth) {
            defaults.openGraph.defaultImageWidth =
              meta.openGraph.defaultImageWidth;
          }
          tagsToRender.push(
            <meta
              key={`og:image:width0${index}`}
              property="og:image:width"
              content={defaults.openGraph.defaultImageWidth}
            />
          );
        }

        if (image.height) {
          tagsToRender.push(
            <meta
              key={`og:image:height${index}`}
              property="og:image:height"
              content={image.height}
            />
          );
        } else if (
          defaults.openGraph.defaultImageHeight ||
          meta.openGraph.defaultImageHeight
        ) {
          if (meta.openGraph.defaultImageHeight) {
            defaults.openGraph.defaultImageHeight =
              meta.openGraph.defaultImageHeight;
          }
          tagsToRender.push(
            <meta
              key={`og:image:height${index}`}
              property="og:image:height"
              content={defaults.openGraph.defaultImageHeight}
            />
          );
        }
      });
    }

    if (meta.openGraph.locale) {
      tagsToRender.push(
        <meta
          key="og:locale"
          property="og:locale"
          content={meta.openGraph.locale}
        />
      );
    }

    if (meta.openGraph.site_name) {
      tagsToRender.push(
        <meta
          key="og:site_name"
          property="og:site_name"
          content={meta.openGraph.site_name}
        />
      );
    }
  }

  if (meta.canonical) {
    tagsToRender.push(
      <link rel="canonical" href={meta.canonical} key="canonical" />
    );
  }

  return tagsToRender
};

export default buildTags;
