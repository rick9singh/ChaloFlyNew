import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  searchQuery: string = '';
  filteredCategories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories()
      .subscribe(categories => {
        this.categories = categories;
        this.filterCategories();
      }, error => {
        console.error('Error fetching categories:', error);
      });
  }

  toggleEditMode(category: any) {
    category.editMode = !category.editMode;
  }

  addCategory() {
    const newCategory = { 
      slNo: 0, // This will be updated later
      name: 'New Category', 
      status: true // Default status to active for new category
    };
    const maxSlNo = Math.max(...this.categories.map(category => category.slNo), 0);
    newCategory.slNo = maxSlNo + 1;

    this.categoryService.addCategory(newCategory)
      .subscribe(() => {
        console.log('Category added successfully!');
        this.loadCategories(); // Refresh categories after adding a new one
      }, error => {
        console.error('Error adding category:', error);
      });
  }

  saveCategoryChanges(category: any) {
    this.categoryService.updateCategory(category)
      .subscribe(() => {
        console.log('Category updated successfully!');
        category.editMode = false;
      }, error => {
        console.error('Error updating category:', error);
      });
  }

  deleteCategory(category: any) {
    this.categoryService.deleteCategory(category.id)
      .subscribe(() => {
        console.log('Category deleted successfully!');
        this.loadCategories(); // Refresh categories after deleting
      }, error => {
        console.error('Error deleting category:', error);
      });
  }

  searchCategories() {
    this.filterCategories();
  }

  private filterCategories() {
    if (this.searchQuery.trim() !== '') {
      this.filteredCategories = this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredCategories = this.categories;
    }
  }
}





/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  searchQuery: string = '';
  filteredCategories: any[] = [];
  private categorySubscription: Subscription | undefined;
  categoryService: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

  loadCategories() {
    this.categorySubscription = this.http.get<any[]>('http://localhost:3000/categories')
      .subscribe({
        next: categories => {
          this.categories = categories;
          this.filterCategories();
        },
        error: error => {
          console.error('Error fetching categories:', error);
        }
      });
  }

  toggleEditMode(category: any) {
    category.editMode = !category.editMode;
  }

  saveCategoryChanges(category: any) {
    this.http.put(`http://localhost:3000/categories/${category.id}`, category)
      .subscribe({
        next: () => {
          console.log('Category updated successfully!');
          category.editMode = false;
        },
        error: error => {
          console.error('Error updating category:', error);
        }
      });
  }

  addCategory() {
    const newId = this.categories.length > 0 ? Math.max(...this.categories.map(category => category.id)) + 1 : 1;
    
    const newCategory = { 
      id: newId,
      slNo: newId, 
      name: 'New Category', 
      status: 'active', 
      editMode: false 
    };
    
    this.categoryService.addCategory(newCategory)
      .subscribe({
        next: () => {
          console.log('Category added successfully!');
          this.categories.push(newCategory);
          this.filterCategories();
        },
        error: (error: any) => {
          console.error('Error adding category:', error);
        }
      });
  }


  deleteCategory(category: any) {
    const index = this.categories.indexOf(category);
    if (index !== -1) {
      this.categories.splice(index, 1);
      this.filterCategories();
    }
  }

  searchCategories() {
    this.filterCategories();
  }

  private filterCategories() {
    if (this.searchQuery.trim() !== '') {
      this.filteredCategories = this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredCategories = this.categories;
    }
  }
}
*/




