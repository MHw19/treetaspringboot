package com.example.shoppingcart.dto;

import java.io.Serializable;

public class ProductObj implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	int id;
	String productname;
	String description;
	double buyPrice;
	double sellPrice;
	double qty;
	String catname;
	
	
	
	public ProductObj() {
		
	}
	
	public ProductObj(int id, String productname, String description, double buyPrice, double sellPrice, double qty,
			String catname) {
		super();
		this.id = id;
		this.productname = productname;
		this.description = description;
		this.buyPrice = buyPrice;
		this.sellPrice = sellPrice;
		this.qty = qty;
		this.catname = catname;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getBuyPrice() {
		return buyPrice;
	}
	public void setBuyPrice(double buyPrice) {
		this.buyPrice = buyPrice;
	}
	public double getSellPrice() {
		return sellPrice;
	}
	public void setSellPrice(double sellPrice) {
		this.sellPrice = sellPrice;
	}
	public double getQty() {
		return qty;
	}
	public void setQty(double qty) {
		this.qty = qty;
	}
	public String getCatname() {
		return catname;
	}
	public void setCatname(String catname) {
		this.catname = catname;
	}
	
	

}
