﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using CoreCodeCamp.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using CoreCodeCamp.Data.Entities;
using System.IO;

namespace CoreCodeCamp.Data
{
  public class CodeCampContext : IdentityDbContext<CodeCampUser>
  {
    private IConfiguration _config;

    public CodeCampContext(IConfiguration config, DbContextOptions<CodeCampContext> options)
        : base(options)
    {
      _config = config;
    }

    public DbSet<Talk> Talks { get; set; }
    public DbSet<Track> Tracks { get; set; }
    public DbSet<Speaker> Speakers { get; set; }
    public DbSet<TimeSlot> TimeSlots { get; set; }
    public DbSet<Room> Rooms { get; set; }
    public DbSet<Sponsor> Sponsors { get; set; }
    public DbSet<EventInfo> CodeCampEvents { get; set; }
    public DbSet<FavoriteTalk> FavoriteTalks { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      base.OnConfiguring(optionsBuilder);

      var connString = _config["Data:DbCodeCamp"];

      optionsBuilder.UseSqlServer(connString);
    }
  }
}
