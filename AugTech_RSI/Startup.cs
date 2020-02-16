using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AugTech_RSI.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AugTech_RSI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Get connection string
            var connectionString = Configuration.GetConnectionString("RuralSourcing_HR");
            //Add the service
            services.AddDbContext<RuralSourcing_HRdbContext>(cfg => cfg.UseSqlServer(connectionString));

            //Get url that is going to use this API
            var clientDomain = Configuration.GetValue<string>("ClientDomain");
            //Add a header service so the API can be called from a different domain.
            services.AddCors(cfg => cfg.AddPolicy("ClientDomain", builder => builder.WithOrigins(clientDomain)));
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseCors("ClientDomain");

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
