import type {
  AdminClient,
  AdminEntity,
  AdminExceptionClient,
  PublishedClient,
  PublishedEntity,
  PublishedExceptionClient,
} from '@dossierhq/core';

export type AppAdminClient = AdminClient<
  AppAdminEntity,
  AppAdminComponent,
  AppAdminUniqueIndexes,
  AppAdminExceptionClient
>;

export type AppAdminExceptionClient = AdminExceptionClient<
  AppAdminEntity,
  AppAdminComponent,
  AppAdminUniqueIndexes
>;

export type AppAdminUniqueIndexes = never;

export type AppAdminEntity = AdminPlaceholder;

export type AdminPlaceholderFields = Record<never, never>;

export type AdminPlaceholder = AdminEntity<
  'Placeholder',
  AdminPlaceholderFields,
  'none' | 'subject'
>;

export function isAdminPlaceholder(
  entity: AdminEntity<string, object>,
): entity is AdminPlaceholder {
  return entity.info.type === 'Placeholder';
}

export function assertIsAdminPlaceholder(
  entity: AdminEntity<string, object>,
): asserts entity is AdminPlaceholder {
  if (entity.info.type !== 'Placeholder') {
    throw new Error('Expected info.type = Placeholder (but was ' + entity.info.type + ')');
  }
}

export type AppAdminComponent = never;

export type AppPublishedClient = PublishedClient<
  AppPublishedEntity,
  AppPublishedComponent,
  AppPublishedUniqueIndexes,
  AppPublishedExceptionClient
>;

export type AppPublishedExceptionClient = PublishedExceptionClient<
  AppPublishedEntity,
  AppPublishedComponent,
  AppPublishedUniqueIndexes
>;

export type AppPublishedUniqueIndexes = never;

export type AppPublishedEntity = PublishedPlaceholder;

export type PublishedPlaceholderFields = Record<never, never>;

export type PublishedPlaceholder = PublishedEntity<
  'Placeholder',
  PublishedPlaceholderFields,
  'none' | 'subject'
>;

export function isPublishedPlaceholder(
  entity: PublishedEntity<string, object>,
): entity is PublishedPlaceholder {
  return entity.info.type === 'Placeholder';
}

export function assertIsPublishedPlaceholder(
  entity: PublishedEntity<string, object>,
): asserts entity is PublishedPlaceholder {
  if (entity.info.type !== 'Placeholder') {
    throw new Error('Expected info.type = Placeholder (but was ' + entity.info.type + ')');
  }
}

export type AppPublishedComponent = never;
