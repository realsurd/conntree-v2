import { Country, State } from 'country-state-city';

export type LocationOption = {
  value: string;
  label: string;
};

export function getCountryOptions(): LocationOption[] {
  return Country.getAllCountries()
    .map((c) => ({
      value: c.isoCode,
      label: c.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function getStateOptions(countryIsoCode: string): LocationOption[] {
  if (!countryIsoCode) return [];

  return State.getStatesOfCountry(countryIsoCode)
    .map((s) => ({
      value: s.isoCode,
      label: s.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

