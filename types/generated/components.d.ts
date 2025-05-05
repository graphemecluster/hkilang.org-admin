import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_about_page_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutPageMember extends Struct.ComponentSchema {
  collectionName: 'components_about_page_members';
  info: {
    displayName: 'Member';
    icon: 'user';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutPageTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_about_page_timeline_items';
  info: {
    displayName: 'Timeline Item';
    icon: 'clock';
  };
  attributes: {
    summary: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactPageSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_social_media_links';
  info: {
    description: '';
    displayName: 'Social Media Link';
    icon: 'oneToMany';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<['facebook', 'twitter', 'youtube']> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventHighlightsPageEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_highlights_page_events';
  info: {
    displayName: 'Event';
    icon: 'calendar';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.heading', false> &
      Schema.Attribute.Required;
    year: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface FaqPageFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_faq_page_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'Heading';
    icon: 'layout';
  };
  attributes: {
    coverImage: Schema.Attribute.Media<'images'>;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.about-section': AboutPageAboutSection;
      'about-page.member': AboutPageMember;
      'about-page.timeline-item': AboutPageTimelineItem;
      'contact-page.social-media-link': ContactPageSocialMediaLink;
      'event-highlights-page.event': EventHighlightsPageEvent;
      'faq-page.faq-section': FaqPageFaqSection;
      'shared.heading': SharedHeading;
    }
  }
}
