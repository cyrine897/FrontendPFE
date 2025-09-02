import { ERole } from './erole';
import { Role } from './role';

describe('Role', () => {
  it('should create an instance', () => {
    const role = new Role(1, ERole.Patient); // ✅ Fournit idRole et role
    expect(role).toBeTruthy();
  });
});
