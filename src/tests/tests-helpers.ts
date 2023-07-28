import { vi } from 'vitest';

export const mockWindowLocation = () => {
  const mockWindowLocationHref = vi.fn();

  const mockWindowLocation: any = {};
  Object.defineProperties(mockWindowLocation, {
    href: {
      set: mockWindowLocationHref,
    },
  });

  vi.spyOn(window, 'location', 'get').mockReturnValue(
    mockWindowLocation as Location
  );

  return { mockWindowLocationHref };
};
