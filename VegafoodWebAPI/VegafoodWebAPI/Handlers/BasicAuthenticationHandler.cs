﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using VegafoodWebAPI.Models;

namespace VegafoodWebAPI.Handlers
{
    public class BasicAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private readonly Models.VegafoodContext _context;
        public BasicAuthenticationHandler(
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock,
            Models.VegafoodContext context)
        :base(options, logger, encoder, clock)
        {
            _context = context;
        }
        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if(!Request.Headers.ContainsKey("Authorization"))
                return AuthenticateResult.Fail("Authorization header was not found");
            try
            {
                var authenticationHeaderValue = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);

                var bytes = Convert.FromBase64String(authenticationHeaderValue.Parameter);
                string[] credentials = Encoding.UTF8.GetString(bytes).Split(":");
                string emailAddress = credentials[0];
                string password = credentials[1];

                Customers customer = _context.Customers.Where(customer => customer.Email == emailAddress && customer.Password == password).FirstOrDefault();
                
                if(customer == null)
                    AuthenticateResult.Fail("Invalid username or password");
                else
                {
                    var claims = new[] { new Claim(ClaimTypes.Name, customer.Email) };
                    var identity = new ClaimsIdentity(claims, Scheme.Name);
                    var principal = new ClaimsPrincipal(identity);
                    var ticket = new AuthenticationTicket(principal, Scheme.Name);

                    return AuthenticateResult.Success(ticket);
                }
            }
            catch(Exception)
            {
                return AuthenticateResult.Fail("Error has occured");
            }

            return AuthenticateResult.Fail("");
        }
    }
}
