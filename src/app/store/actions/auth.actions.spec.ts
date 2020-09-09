import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from '../../services/auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const mockUsers = [
  {
    email: 'prakash@gmail.com',
    password: 'test',
  },
];

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    this.service = TestBed.inject(AuthService);
  });

  beforeEach(inject(
    [AuthService, HttpTestingController],
    (serviceName, httpMockName) => {
      service = serviceName;
      httpTestingController = httpMockName;
    }
  ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//   it('login: should return an array containing the valid user', () => {
//     const mockCheckLoginUser = {
//         id : '6y30BAQ',
//       email: 'prakash0544@gmail.com',
//       password: 'test',
//     };
//     this.service
//       .logIn({
//         email: 'prakash0544@gmail.com',
//         password: 'test',
//       })
//       .subscribe((user) => {
//         expect(user).toBeDefined();
//         expect(user.length).toBe(1);
//         expect(user.id).toBe(1);
//       });
//     const req = httpTestingController.expectOne(
//       'http://localhost:3000/login?email=' +
//         mockCheckLoginUser.email +
//         '&password=' +
//         mockCheckLoginUser.password
//     );
//     req.flush(mockUsers);
//     httpTestingController.verify();
//   });

  it('signup: should return an array containing the valid user', () => {
    const mockCheckLoginUser = {
      name: 'test',
      email: 'prakash0544@gmail.com',
      password: 'test',
    };
    this.service.signUp(mockCheckLoginUser).subscribe((user) => {
      expect(user).toBeDefined();
      expect(user.id).toBeDefined();
      expect(user.name).toBe(mockCheckLoginUser.name);
      expect(user.email).toBe(mockCheckLoginUser.email);
      expect(user.password).toBe(mockCheckLoginUser.password);
    });
    const req = httpTestingController.expectOne(
      'http://localhost:3000/register'
    );
    req.flush(mockUsers);
    httpTestingController.verify();
  });
});