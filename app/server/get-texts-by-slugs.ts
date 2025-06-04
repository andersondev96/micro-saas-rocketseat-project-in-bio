import "server-only";

export const socialMedias = ["instagram", "github", "linkedin", "twitter", "youtube", "facebook"];

export async function getTextBySlug(slug: string) {
  for (const socialMedia of socialMedias) {
    const mediaSlug = `link-na-bio-para-${socialMedia}`;
    if (slug === mediaSlug) {
      const capitalizedSocialMedia = 
        socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1);  
        return {
          title: `Link na bio para ${capitalizedSocialMedia}`,
          description: `Compartilhe todos os seus links no perfil do seu ${capitalizedSocialMedia}`
        };
    }
  }
  return undefined;
}