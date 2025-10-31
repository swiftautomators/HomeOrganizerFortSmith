export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-steps-to-declutter-your-home",
    title: "5 Simple Steps to Declutter Your Home",
    excerpt: "Learn our proven 5-step process to declutter any room in your home efficiently and effectively.",
    content: `Decluttering your home doesn't have to be overwhelming. Follow these five simple steps to create a more organized, peaceful living space.

## Step 1: Start Small

Choose one room or even one area of a room to begin. Trying to tackle your entire home at once leads to burnout and frustration.

## Step 2: Sort Everything

Create four categories: Keep, Donate, Trash, and Unsure. Be honest about what you actually use and love.

## Step 3: Make Quick Decisions

Don't overthink items. If you haven't used something in a year and it doesn't bring you joy, it's time to let it go.

## Step 4: Organize What Remains

Once you've decluttered, organize your remaining items with proper storage solutions.

## Step 5: Maintain Your Progress

Develop daily habits to keep your space organized. Spend 10 minutes each day putting things back in their designated spots.

Remember, decluttering is a journey, not a destination. Be patient with yourself and celebrate small wins along the way.`,
    author: "Professional Organizer Fort Smith",
    date: "2024-10-15",
    category: "Decluttering",
    readTime: "5 min read",
  },
  {
    slug: "organizing-small-spaces",
    title: "Maximizing Small Spaces: Storage Solutions That Work",
    excerpt: "Discover creative storage solutions and organizing techniques perfect for apartments and small homes.",
    content: `Living in a small space doesn't mean sacrificing organization. Here are our best tips for maximizing every square inch.

## Vertical Storage is Your Friend

Use wall-mounted shelves, hooks, and tall bookcases to take advantage of vertical space that often goes unused.

## Multi-Functional Furniture

Invest in furniture that serves multiple purposes: ottomans with storage, beds with drawers, and fold-down desks.

## Clear Storage Containers

See-through containers help you quickly identify contents without opening every box.

## Under-Bed Storage

This often-wasted space is perfect for seasonal clothing, extra linens, or rarely-used items.

## Declutter Regularly

In small spaces, clutter accumulates quickly. Make it a habit to regularly assess what you truly need.

With the right strategies, even the smallest space can feel spacious and organized.`,
    author: "Professional Organizer Fort Smith",
    date: "2024-10-10",
    category: "Home Organization",
    readTime: "4 min read",
  },
  {
    slug: "kitchen-organization-tips",
    title: "10 Kitchen Organization Tips Every Home Chef Needs",
    excerpt: "Transform your kitchen into an efficient, organized space with these professional organizing tips.",
    content: `A well-organized kitchen makes cooking more enjoyable and efficient. Here are our top 10 tips.

## 1. Group Similar Items

Keep baking supplies together, cooking utensils in one area, and snacks in a designated spot.

## 2. Use Drawer Dividers

Prevent the dreaded junk drawer with proper dividers for utensils and small items.

## 3. Clear Countertops

Keep only daily-use items on counters. Everything else should have a home in cabinets or drawers.

## 4. Lazy Susans in Cabinets

These rotating trays make corner cabinets accessible and prevent items from getting lost.

## 5. Label Everything

Labels help everyone in the family know where things belong, making cleanup easier.

## 6. Vertical Pan Storage

Store pans vertically to save space and make them easier to grab.

## 7. Fridge Organization Bins

Use clear bins to group similar items and prevent food from getting lost in the back.

## 8. Spice Rack System

Alphabetize spices or organize by frequency of use for quick access.

## 9. Under-Sink Organization

Use stackable bins and a tension rod for cleaning supplies.

## 10. Regular Purging

Check expiration dates monthly and donate unused kitchen items quarterly.

An organized kitchen saves time, reduces stress, and might even inspire you to cook more!`,
    author: "Professional Organizer Fort Smith",
    date: "2024-10-05",
    category: "Home Organization",
    readTime: "6 min read",
  },
  {
    slug: "home-office-productivity",
    title: "Creating a Productive Home Office Environment",
    excerpt: "Design and organize your home office for maximum productivity and minimal distractions.",
    content: `Working from home requires a dedicated, organized space. Here's how to create a productive home office.

## Choose the Right Location

Select a quiet area with natural light if possible. Even a corner of a room can work with proper setup.

## Ergonomic Setup

Invest in a comfortable chair and position your monitor at eye level to prevent strain.

## Manage Cables

Use cable management solutions to keep cords organized and out of sight.

## Filing System

Implement a simple filing system for papers, whether digital or physical.

## Minimize Distractions

Keep personal items and distractions minimal. Your office should signal "work mode" to your brain.

## Good Lighting

Combine natural light with task lighting to reduce eye strain and improve focus.

## Daily Reset

End each workday by tidying your desk and preparing for the next day.

A well-organized home office isn't just about aesthetics—it's about creating an environment that supports your best work.`,
    author: "Professional Organizer Fort Smith",
    date: "2024-09-28",
    category: "Office Organization",
    readTime: "5 min read",
  },
  {
    slug: "moving-checklist",
    title: "The Ultimate Moving Checklist: Stress-Free Relocation",
    excerpt: "Our comprehensive moving checklist helps you stay organized from packing to settling into your new home.",
    content: `Moving doesn't have to be stressful. Follow this timeline-based checklist for a smooth transition.

## 8 Weeks Before

- Research moving companies
- Start decluttering
- Create a moving binder
- Notify landlord if renting

## 6 Weeks Before

- Begin packing non-essentials
- Label boxes clearly
- Order packing supplies
- Schedule utility transfers

## 4 Weeks Before

- Confirm moving date
- Notify important parties of address change
- Pack seasonal items
- Photograph valuable items

## 2 Weeks Before

- Pack most items
- Defrost freezer
- Confirm moving arrangements
- Set aside essentials box

## Moving Week

- Pack remaining items
- Do final walkthrough
- Keep important documents with you
- Prepare snacks and water for moving day

## After Move

- Unpack essentials first
- Check for damage
- Update address everywhere
- Meet new neighbors

With proper planning and organization, your move can be surprisingly smooth and stress-free.`,
    author: "Professional Organizer Fort Smith",
    date: "2024-09-20",
    category: "Moving",
    readTime: "7 min read",
  },
  {
    slug: "seasonal-closet-organization",
    title: "Seasonal Closet Organization: Rotate Like a Pro",
    excerpt: "Learn how to organize your closet seasonally for better space management and easier outfit selection.",
    content: `Seasonal closet rotation maximizes space and makes getting dressed easier. Here's our professional approach.

## Why Rotate Seasonally?

Seasonal rotation keeps current clothes accessible while storing off-season items, making your daily routine simpler.

## The Two-Season System

Divide your wardrobe into warm-weather and cold-weather categories for easier management.

## Storage Solutions

Use vacuum-sealed bags for bulky winter items and breathable garment bags for delicate pieces.

## The Rotation Process

1. Remove all current-season items
2. Clean and repair off-season clothes before storing
3. Reorganize remaining clothes by type and color
4. Store off-season items in labeled containers

## Maintenance Tips

- Rotate during temperate weather
- Inspect items for damage before storing
- Use cedar blocks to prevent moths
- Keep a list of stored items

## Year-Round Essentials

Some items like jeans, basic tees, and neutral sweaters can remain accessible year-round.

Seasonal rotation transforms your closet from cramped to spacious and makes your wardrobe more functional.`,
    author: "Professional Organizer Fort Smith",
    date: "2024-09-15",
    category: "Home Organization",
    readTime: "5 min read",
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogCategories(): string[] {
  const categories = new Set(blogPosts.map((post) => post.category));
  return Array.from(categories);
}
